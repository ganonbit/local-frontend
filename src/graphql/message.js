import gql from 'graphql-tag';

/**
 * Records to select from message author
 */
export const messageAuthorPayload = `
  author {
    id
    username
    fullName
    image
    following {
      id
      user
    }
    followers {
      id
      user
    }
    notifications {
      id
      author {
        id
        username
      }
    }
  }
`;

/**
 * Creates a message for user
 */
export const CREATE_MESSAGE = gql`
  mutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
    }
  }
`;

/**
 * Deletes a message
 */
export const DELETE_MESSAGE = gql`
  mutation($input: DeleteMessageInput!) {
    deleteMessage(input: $input) {
      id
    }
  }
`;

/**
 * Gets messages for user
 */
export const GET_USER_MESSAGES = gql`
  query($userId: ID!, $skip: Int, $limit: Int) {
    getUserMessages(userId: $userId, skip: $skip, limit: $limit) {
      count
      messages {
        id
        content
        image
        createdAt
        updatedAt
        author {
          id
          fullName
          username
          image
        }
      }
    }
  }
`;

/**
 * Gets specific message by id
 */
export const GET_MESSAGE = gql`
  query($id: ID!) {
    getMessage(id: $id) {
      id
      content
      image
      createdAt
      updatedAt
      ${messageAuthorPayload}
    }
  }
`;

/**
 * Updates message seen property
 */
export const UPDATE_MESSAGE_SEEN = gql`
  mutation($input: UpdateMessageSeenInput!) {
    updateMessageSeen(input: $input)
  }
`;
