// Import attendees data
import { attendees } from '../models';

// Define resolvers
export default {
  Query: {
    getAttendeeById: async (_, { attendeeId }) => {
      // RETURN the attendee with the matching attendeeId
      // Note: the function signature can also be written as async (parentObj, args, context, info), just like in graphQL
      return attendees.find((attendee) => attendee.attendeeId === attendeeId);
    },
    getAttendees: async () => {
      // RETURN list of all attendees
      // Note: the function signature can also be written as async (parentObj, args, context, info), just like in graphQL
      return attendees;
    }
  },
  Attendee: {
    
    // Reference resolver - used by services querying attendee entities
    __resolveReference(parent) {
      // RETURN the attendee with the same id as parent.attendeeId
      return attendees.find((attendee) => attendee.attendeeId === parent.attendeeId);
    }
  }
};