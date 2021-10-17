import { LinkBox, LinkOverlay, Grid, Avatar, Text, HStack, VStack } from "@chakra-ui/react"

const ContributorCard = ({ name, username, profile_url, avatar_url}) => {
    return (
        <LinkBox borderRadius="lg" borderWidth="1px" p={4}>
            <LinkOverlay href={profile_url} target="_blank"></LinkOverlay>
            <VStack alignItems="center" justify="center">
                <Avatar src={avatar_url} size="2xl"></Avatar>
                <Text fontSize="xl" fontWeight="bold">{name}</Text>
                <Text>@{username}</Text>
            </VStack>
        </LinkBox>
    )
}

const Contributors = ({ data }) => {
    return (
        <div>
            <Grid my="12" templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }} gap={6} p={5}>
                {data.map(d => (
                    <ContributorCard
                        name={d['name']}
                        username={d['login']}
                        profile_url={d['html_url']}
                        avatar_url={d['avatar_url']}
                    ></ContributorCard>
                ))}
            </Grid>
        </div>
    )
}

export default Contributors
