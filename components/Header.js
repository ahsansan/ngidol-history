import Link from "next/link";

const Header = () => {
    const menuHead = [
        {
            name: "Home",
            url: "/",
            index: 1
        },
        {
            name: "History Theater",
            url: "/history-theater",
            index: 2
        },
        {
            name: "History Spending",
            url: "/history-spending",
            index: 3
        },
    ]
    return(
        <div>
            <header className="py-3 px-5 mb-5">
                <Link href="/"><a><h1 className="text-3xl text-red-600 font-bold font-sans hover:underline">History Ngidol Pribadi</h1></a></Link>
                <p className="italic text-sm">Namanya juga gabut, iseng aja bikin ginian buat keperluan pencatatan pribadi.</p>
            </header>
            <nav>
                <ul className="bg-[#CD0C0D] flex flex-col md:flex-row flex-wrap justify-center items-center">
                    {menuHead.map((menu) => (
                        <Link href={menu.url} key={menu.index}><a><li className="w-[170px] py-5 text-center border-y md:border border-white uppercase text-white text-sm font-bold hover:underline" key={menu.index}>{menu.name}</li></a></Link>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Header;