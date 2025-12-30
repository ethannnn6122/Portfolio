import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.FooterWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        
                        <h3 className={classes.Brand}>Ethan Gruenemeier</h3>
                        <p className={classes.SubBrand}>Secure Developer</p>
                        <div className={classes.Copyright}>
                            <p className="mb-0">
                                &copy; {new Date().getFullYear()} <strong>Milehighcoding</strong>. All rights reserved.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;