import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient ({
    url: 'https://magnetic-dolphin-72.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'KLQaRHr86Ka5B70RbG6i4046GNWoSfhKa97p1VRYjwP90oRf65leZyvCUbZmsQ7p'
    }
});

export default client