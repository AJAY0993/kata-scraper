You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is ```online```, ```offline``` and ```away```.

If someone is ```online``` but their ```lastActivity``` was more than 10 minutes ago they are to be considered ```away```.


The input data has the following structure: 
```javascript
[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
```
```csharp
// Example input:
new User[] 
{
  new User("David", UserStatus.Online, 10),
  new User("Lucy", UserStatus.Offline, 22),
  new User("Bob", UserStatus.Online, 104)
};

// Reference:
public enum UserStatus
{
  Online,
  Offline,
  Away
}

public class User
{
  public string Username;
  public UserStatus Status;
  public int LastActivity;
  public User(string username, UserStatus status, int lastActivity)
  {
    Username = username;
    Status = status;
    LastActivity = lastActivity;
  }
}
```
The corresponding output should look as follows:
```javascript
{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
```
```csharp
Dictionary<UserStatus, IEnumerable<string>>
{
  {UserStatus.Online, new[] {"David"}},
  {UserStatus.Offline, new[] {"Lucy"}},
  {UserStatus.Away, new[] {"Bob"}}
};
```
If for example, no users are ```online``` the output should look as follows: 
```javascript
{
  offline: ['Lucy'],
  away: ['Bob']
}
```
```csharp
new Dictionary<UserStatus, IEnumerable<string>>
{
  {UserStatus.Offline, new[] {"Lucy"}},
  {UserStatus.Away, new[] {"Bob"}}
};
```
username will always be a ```string```, status will always be either ```'online'``` or ```'offline'``` (UserStatus enum in C#) and lastActivity will always be ```number >= 0```.

Finally, if you have no friends in your chat application, the input will be an empty array ```[]```.  In this case you should return an empty object ```{}``` (empty Dictionary in C#).
