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
        			<a href="index.html" title="Stephen Brock">Stephen Brock</a>
        		</div>
            </div>
            <div class="span10">
        		<nav id="menu">
                    <ul id="menu-nav">
                        <!-- <li><a href="about.html">about</a></li> -->
                        <!-- <li><a href="contact.html">contact</a></li> -->
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
                    <h7>stephen.brock.2020@bristol.ac.uk</h7>
                </div>
            </div>
             <div class="span8 widget">
            	<div class="twitter-widget">
                		<h7>&nbsp; • &nbsp;<a href="https://www.linkedin.com/in/stephen-brock-949500198/" target="_blank">linkedin</a> &nbsp; • &nbsp;
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