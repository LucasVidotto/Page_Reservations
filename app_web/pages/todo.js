import styles from '../styles/Todo.module.css';

export async function getStaticProps(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await data.json();
    return {
        props: {todos},
    }
}
export default function Todo({todos}){
    return(
        <>
            <h1>Trabalhos:</h1>
            <ul className={styles.todolist}>
               {todos.map((todo) =>(
                <li key={todo.id}>{todo.title}</li>
               ))}
            </ul>
        </>
    )
}