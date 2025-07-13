import cards from './DataBase.js';

export function RightContent() {
  return (
    <main className="rightContentWrapper">
      {cards.map(card => (
        <div key={card.id} className="card" style={{ backgroundImage: `url(${card.image})` }}>
          <div className="cardInfo">
            <h3>{card.title}</h3>
            <p>{card.price}</p>
            <p>{card.location}</p>
            <p>{card.people}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
