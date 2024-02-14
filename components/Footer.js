import Link from "next/link";

const Footer = () => {
    const dateNow = new Date;
    const year = dateNow.getFullYear()
    return(
        <footer className="bg-[#CD0C0D] py-2 text-center text-xs">
            <span className="text-white">Dibuat dengan kegabutan 😁 Copyright {year} © <Link href="/"><a><strong>Ngidol History</strong></a></Link></span>
        </footer>
    )
}

export default Footer;