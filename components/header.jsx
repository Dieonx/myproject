import Link from "next/link"


const Header = () => {
  return (
    <div className="flex justify-between p-4 items-center">
        <div className="flex items-center gap-3">
            <h1 className="font-bold text-xl bg-blue-950 text-white px-2 py-1 rounded">E</h1>
            <p className="font-bold text-2xl hover:text-grey-400">Ebube</p>
        </div>
        <div>
       
        <div className="flex gap-2">
          <Link href='/'>Home</Link> 
          <Link href='/about'>About</Link>
         
        </div>
        </div>
    </div>
  )
}

export default Header