function UserCard({ name, age, isMember = false }) {
    return (
        <div style={{ border: isMember ? '2px solid gold' : '2px solid gray' }}>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Status: {isMember ? 'Member' : 'Guest'}</p>
        </div>
    );
}

function UserCardList() {
    return (
        <div>
            <UserCard name="Alice" age={30} isMember={true} />
            <p>--------------------------</p>
            <UserCard name="Bob" age={25} />
        </div>
    );
}

export default UserCardList;
