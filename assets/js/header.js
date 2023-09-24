class Header extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
<!-- Header -->
<header>
	<div class="container">
    	<div class="row">
        	<div class="span2">
            	<div id="logo">
        			<a href="index.html" title="Stephen">Stephen</a>
        		</div>
            </div>
            <div class="span10">
        		<nav id="menu">
                    <ul id="menu-nav">
                        <li><a href="about.html">about</a></li>
                        <li><a href="contact.html">contact</a></li>
                    </ul>
                </nav>
        	</div>
        </div>
    </div>
</header>
<!-- End Header -->
        `
    }
}

//Footer

class Footer extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML =
            `

<!-- Start Footer -->
<footer class="footer-widgets">
	<div class="container">
    	<div class="row">
         	<div class="span4 widget">
            	<div class="about-widget">
                    <h7>email@email.com</h7>
                </div>
            </div>
             <div class="span8 widget">
            	<div class="twitter-widget">
                		<h7><a href="#" target="_blank">facebook</a> &nbsp; • &nbsp; <a href="#" target="_blank">instagram</a> &nbsp; • &nbsp; <a href="#" target="_blank">linkedin</a> &nbsp; • &nbsp; <a href="#" target="_blank">github</a>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- End Footer -->

      `

    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);