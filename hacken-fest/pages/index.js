import Footer from "../components/Footer"
import Contributors from "../components/Contributors"
import Home from "../components/Home"

const Index = (props) => {
  return (
    <div>
      <Home></Home>
      <Contributors data={props.data}></Contributors>
      <Footer></Footer>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  const repositories = [
    "iot-lab-kiit/JukeBox",
    "iot-lab-kiit/ipl-gallery",
    "iot-lab-kiit/Monster-RoloDex",
    "iot-lab-kiit/Password-Generator",
    "iot-lab-kiit/Android-Components-Library",
    "iot-lab-kiit/GitOnAndroid",
    "iot-lab-kiit/To-Do-List-Hacktoberfest",
    "iot-lab-kiit/HealthyWays",
    "iot-lab-kiit/blog-engine-android",
    "iot-lab-kiit/blog-engine-web",
    "iot-lab-kiit/blog-backend",
    "iot-lab-kiit/quotes",
    "DSC-KIIT/project-halide",
    "DSC-KIIT/Hacken-Fest-2021",
    "DSC-KIIT/Library-Management-System-Flutter",
    "DSC-KIIT/Diabetic-Retinopathy-Detection",
    "DSC-KIIT/First-Contribution-DSCKIIT"
  ]

  const api_urls = repositories.map(repo => `https://api.github.com/repos/${repo}/contributors`)
  let responses = await Promise.all(api_urls.map(async url => await fetch(url, {
    headers: {
      "Authorization": "Basic anVuYWlkcmFoaW06Z2hwX2F1Tld5b0RiQlBpV21YMnI4RHZ5VkpxS2x5bnVPSDA0dHVERg=="
    }
  })))

  let contributors_data = await Promise.all(responses.map(r => r.json()))
  contributors_data = contributors_data.flat()

  let profile_data = await Promise.all(contributors_data.map(async user => {
    if (!user['url']) return null
    let response = await fetch(user['url'], {
      headers: {
        "Authorization": "Basic anVuYWlkcmFoaW06Z2hwX2F1Tld5b0RiQlBpV21YMnI4RHZ5VkpxS2x5bnVPSDA0dHVERg=="
      }
    })

    return await response.json()
  }))

  profile_data = profile_data.filter(x => x != null)
  profile_data = profile_data.filter((user, index, arr) => arr.findIndex(t => (t.login === user.login)) === index)

  return {
    props: {
      data: profile_data
    }
  }
}