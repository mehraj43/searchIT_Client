import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

function App() {
  const [search, setSearch] = useState('');
  const [companyDtls, setCompanyDtls] = useState([]);
  const baseURL = 'http://localhost:8080/api';

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(`${baseURL}/searchCompanyByKeyword?keyword=${search}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setCompanyDtls(data.searchProduc);
        });
    };
    fetchProducts();
  }, [search]);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch(`${baseURL}/getCompanies`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setCompanyDtls(data.getCompanyDetails);
        });
    };
    fetchProducts();
  }, []);

  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      <main className='mt-5 mx-3 mb-5'>
        {!!companyDtls.length && <Banner companyData={companyDtls} />}
      </main>
    </>
  );
}

export default App;
