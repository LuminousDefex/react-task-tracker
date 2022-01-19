import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Dentist Appointment',
                day: 'Jan 20th at 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Submit Interview Quiz',
                day: 'Jan 21th at 10:00pm',
                reminder: true,
            },
            {
                id: 3,
                text: 'Pay Bills',
                day: 'Feb 1st at 10:00am',
                reminder: false,
            },

        ]
    )

    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    );
};

export default Tasks;
