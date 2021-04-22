import Link from 'next/Link'

const page2 = ()=>{
    return (
        <p>
            <table>
                <tr>
                    <th>Nama</th>
                    <th>Umur</th>
                </tr>
                <tr>
                    <Link href='/tiga?name=Ali'>
                        <a><td>Ali</td></a>
                    </Link>
                    <td>20</td>
                </tr>
                
                
                <tr>
                    <td>Budi</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>Fahri</td>
                    <td>20</td>
                </tr>
            </table>
            
            <br></br>
            <Link href = '/'> 
            <a>
                Back to Home
            </a>
            </Link>
        </p>
       
    )
}

export default page2;