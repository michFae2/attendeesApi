import { gql } from 'apollo-server';

/* 
Note: gql is a function which takes in a schema string. 
This is called a tagged template. 
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates for more info.
*/

export default gql`

  enum AttendeeType {
    STUDENT
    INTERN
    ENTRYLEVEL
    MIDCAREER
    SENIOR
    EXECUTIVE
  }

  # Attendee needs to be an Entity in order to be shared with other microservices.
  # The @key directive defines the entity's primary key, which is the id field in this case.
  # This primary key will be used as a unique reference for all implementing services

  # GraphQL scalar types: https://graphql.org/learn/schema/#scalar-types
  # GraphQL enumeration types: https://graphql.org/learn/schema/#enumeration-types
  
  type Attendee @key(fields: "attendeeId") {
    attendeeId: ID!
    name: String!
    type: AttendeeType!
    age: Int!
  }
  type Query {
    getAttendeeById(attendeeId: ID!): Attendee
    getAttendees: [Attendee]
  }
  
`;