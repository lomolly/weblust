import Link from 'next/link';
import styles from '../../styles/Weblust.module.css';


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    return { 
        props: { weblust : data}
    }
}

const Weblust = ({weblust}) => {
    return (
        <div>
            <h1>Web Lust Page</h1>
            { weblust.map(wl => (
                <Link href={`/weblust/${wl.id}`} key={wl.id}>
                    <span className={styles.single}>
                        <h3>{wl.name}</h3>
                    </span>
                </Link>
            ))}
        </div>
     );
}
 
export default Weblust;