
import { gql } from "@apollo/client";


export const RETRIEVE_CLOSET_BY_ID = gql`
query RetrieveClosetById {
    retrieveClosetById(input: { userId: "b218489e-f25f-41f5-b022-a33f9a369763" }) {
        id
        name
        created_at
        product {
            id
            nameOfProduct
            nameOfCollection
            dateOfCollection
            closetId
            like
            image
            created_at
        }
        category {
            id
            nameOfCategory
        }
        user {
            id
            name
            image
        }
    }
}`
