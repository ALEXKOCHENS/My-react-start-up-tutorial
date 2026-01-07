const Lists = () => {
  const fruits = ['mangoes', 'pineapple', 'orange', 'lemon'];

  const users = [
    { id: 1, name: 'alex kochens', age: 20, course: 'React' },
    { id: 2, name: 'peter', age: 25, course: 'JavaScript' },
    { id: 3, name: 'kent', age: 17, course: 'HTML' },
    { id: 4, name: 'mary', age: 22, course: 'PHP' },
  ];

  return (
    <div>
      <h1 className='paragraph'>A sample list of fruits</h1>

      <ul className='lists'>
        {fruits.map((frui) => (
          <li key={frui} className='list-ui'>
            {frui}
          </li>
        ))}
      </ul>

      <p className='paragraph'>My app users</p>

      <ul className='lists'>
        {users.map((user) => (
          <li key={user.id} className='users'>
            {user.name} — {user.age} years — {user.course}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
