import logo from '../../../assets/nav_logo.png';
import Button from '../../../components/Button';

const Navbar = () => {
    const links = <>
        <li><a className='link-hover hover:text-primary-color' href='#'>HOME</a></li>
        <li><a className='link-hover hover:text-primary-color' href='#about-me'>About Me</a></li>
        <li><a className='link-hover hover:text-primary-color' href='#my-skills'>My Skills</a></li>
        <li><a className='link-hover hover:text-primary-color' href='#my-projects'>My Projects</a></li>
        <li><a className='link-hover hover:text-primary-color' href='#contact-me'>Contact Me</a></li>
    </>;

    return (
        <div className="navbar fixed top-0 z-[1000] max-w-screen-2xl bg-black bg-opacity-40 mx-auto w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-slate-900 bg-opacity-30 rounded-box z-50 mt-3 w-52 p-2 shadow text-slate-500">
                        {links}
                    </ul>
                </div>
                <a className="text-xl">
                    <img 
                        className='h-[30px] md:h-[50px]'
                        src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-slate-300 font-medium">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="pr-2" href="https://drive.google.com/file/d/1yQORbgSBxQXGrspM0fKEH0nQCols77Ps/view?usp=sharing" download="Md_Tanbir_Hossen_Resume.pdf">
                    <Button text='Resume' primary={true}></Button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
