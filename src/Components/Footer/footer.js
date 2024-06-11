import "./footer.css"
export const Footer = () => {
    return (<>
    <footer className="footer-all">
        <div style={{flex: "auto"}}>
            <h4><b>Contact Us :</b></h4>
            <address>
                The Malay College Kuala Kangsar, <br/>
                Jalan Tun Abdul Razak,<br/>
                33000 Kuala Kangsar, Perak, <br/>
                Malaysia.<br/>
            </address> 
        </div>
        
        <div style={{flex: "auto"}}>
            <a href="mailto:ibc@mckk.edu.my">ibc@mckk.edu.my</a>
            <h4><b>Follow us at:</b></h4>
            <a href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2Fibdpmckk%2F">Facebook</a>
        </div>
    </footer>
    </>)
}