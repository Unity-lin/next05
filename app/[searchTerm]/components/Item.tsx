import Link from 'next/link'


export default function Item(){
    return(
        <article className="m-4 max-w-lg">
            <div>
                <h2>
                    <Link href='/' target='_blank' className ='text-xl font-bold underline'> Test </Link>
                </h2>
                <p> article </p>
            </div>    
        </article>
    )
}