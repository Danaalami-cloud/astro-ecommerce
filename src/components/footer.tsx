export default function Footer() {
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-light text-lg-start">
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;Astro Ecommerce by 
              <a
                href="https://www.creative-tim.com"
                className="text-light ms-1"
                target="_blank"
              >
                Dana Alami
              </a>
              .
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-between justify-content-lg-end">
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Dana Alami
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  href="https://www.creative-tim.com/license"
                  className="nav-link text-sm pe-0 text-muted"
                  target="_blank"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


