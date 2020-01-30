import gql from 'graphql-tag';

/**
 * Creates a comment
 */
export const CREATE_COMMENT = gql`
  mutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`;

/**
 * Deletes a comment
 */
export const DELETE_COMMENT = gql`
  mutation($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      id
    }
  }
`;

/**
 * Edit a comment
 */
export const EDIT_COMMENT = gql`
  mutation($id: ID!, $input: EditCommentInput!) {
    editComment(id: $id, input: $input) {
      id
      comment
    }
  }
`;
