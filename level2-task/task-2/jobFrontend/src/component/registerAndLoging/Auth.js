import "./auth.css";

export const Auth = ({ children }) => {
  return (
    <section className="loginPage overflow-hidden">
      <main className="loginPageWrapper row overflow-hidden">
        <aside className="col-lg-6 col-md-6 col-12 auth-left d-none d-md-block">
          <img
            src="https://img.freepik.com/premium-vector/young-woman-enjoy-sitting-reading-book-hygge-concept-vector-illustration_194708-2078.jpg"
            alt=".."
          />
        </aside>
        <div className="auth col-lg-6 col-md-6 col-12 auth-right align-items-center d-flex justify-content-center">
          {children}
        </div>
      </main>
    </section>
  );
};

export default Auth;
