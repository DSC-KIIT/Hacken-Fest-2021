import { LinkBox, LinkOverlay, Grid, Avatar, Text, HStack, VStack } from "@chakra-ui/react"

const ContributorCard = ({ name, username, profile_url, avatar_url, followers, following }) => {
    return (
        <LinkBox borderRadius="lg" borderWidth="1px" p={4}>
            <LinkOverlay href={profile_url}></LinkOverlay>
            <VStack alignItems="center">
                <Avatar src={avatar_url} size="2xl"></Avatar>
                <Text fontSize="xl" fontWeight="bold">{name}</Text>
                <Text>@{username}</Text>
                <HStack>
                    <Text>{followers} Followers</Text>
                    <Text>{following} Following</Text>
                </HStack>
            </VStack>
        </LinkBox>
    )
}

const Contributors = ({ data }) => {
    return (
        <div>
            <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }} gap={6} p={5}>
                {data.map(d => (
                    <ContributorCard
                        name={d['name']}
                        username={d['login']}
                        profile_url={d['html_url']}
                        avatar_url={d['avatar_url']}
                        followers={d['followers']}
                        following={d['following']}
                    ></ContributorCard>
                ))}
            </Grid>
        </div>
    )
}

export default Contributors
