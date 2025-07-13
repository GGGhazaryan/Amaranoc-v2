export default function GeneralFooter() {
  return (
    <>

      <footer className="footerContainer">
        <div className="footerGlass">
          <h2>Տեղադրել հայտարարություն</h2>
          <p>Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ</p>
          <form className="footerForm">
            <input type="text" placeholder="Անուն Ազգանուն" required />
            <input type="tel" placeholder="Հեռախոսահամար" required />
            <input type="email" placeholder="Էլ․ հասցե" required />
            <button type="submit">Ուղարկել</button>
          </form>
        </div>
      </footer>

    </>
  )
}