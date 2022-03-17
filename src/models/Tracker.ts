import Completion from './Completion';
import TrackerEntry from './TrackerEntry';
import TrackerStatus from './TrackerStatus';

/**
 * A Tracker describes an objective which needs to be accomplished on a daily basis.
 * To keep tracker of the objective, the trackers references TrackerEntries.
 *
 * @interface Tracker
 * @member {string} id a v4 uuid
 * @member {string} beginDate when the completions start (can be in the past or the future)
 * @member {string?} dateHidden when not undefined, specify which day the tracker is ignored. The next day, it's automatically set to "undefined".
 * @member {number?} duration number of days the tracker is active since beginDate
 * @member {string} endDate when the Tracker is over
 * @member {TrackerEntry[]} entries TrackerEntries related to this Tracker
 * @member {string} name
 * @member {number?} remainingDays computed attribute describing the number of days before the tracker is over
 * @member {Completion[]} requiredCompletions objectives to complete the tracker
 * @member {TrackerStatus} status @see TrackerStatus
 */
export default interface Tracker {
  id: string;
  beginDate: string;
  dateHidden?: string;
  duration?: number;
  endDate?: string;
  entries: TrackerEntry[];
  name: string;
  remainingDays?: number;
  requiredCompletions: Completion[];
  status: TrackerStatus;
}
