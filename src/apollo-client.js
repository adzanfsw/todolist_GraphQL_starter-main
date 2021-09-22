import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient ({
    uri: 'https://magnetic-dolphin-72.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'KLQaRHr86Ka5B70RbG6i4046GNWoSfhKa97p1VRYjwP90oRf65leZyvCUbZmsQ7p'
    },
    cache: new InMemoryCache(),
});

export default client