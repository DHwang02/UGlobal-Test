 * ---------------------------------
 * 1. **Count Pending Tasks**:
 *    - Uses `filter()` to identify tasks with the status `"pending"`.
 *    - Returns the count of such tasks.
 * 
 * 2. **Get Completed Task Titles**:
 *    - Uses `filter()` to extract tasks with the status `"completed"`.
 *    - Maps over the filtered tasks to extract and return only their titles.
 * 
 * 3. **Sort Tasks by Deadline**:
 *    - Creates a shallow copy of the array using `[...taskList]` to avoid mutating the original.
 *    - Uses `sort()` to order tasks by `deadline` in ascending order.
 * 
 * 4. **Filter Tasks by Keyword**:
 *    - Uses `filter()` and `includes()` to find tasks whose `title` contains the given keyword (case-insensitive).
 *    - Logs and returns the matching tasks.
