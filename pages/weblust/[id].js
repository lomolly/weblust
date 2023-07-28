
//The getStaticPaths is to tell next how many html pages is needed base on the data
//Then it will fetch the getStaticProps function based on each item needed
//Then generate an html page for each item
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

     const   paths = data.map(weblust => {
            return {
                params:  { id: weblust.id.toString() }
            }
     })
    return {
            paths,
            fallback: false
        }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { weblust : data }
    }
}

const WeblustDetails = ({weblust}) => {
    return ( 
        <div>
            <h1>{weblust.name}</h1>
            <p>{ weblust.email }</p>
            <p>{ weblust.website }</p>
            <p>{ weblust.address.city }</p>
        </div>
    );
}
 
export default WeblustDetails;