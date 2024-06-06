function formatData(data) {
  let formattedData = [];
  data.forEach((element) => {
    const {
      meanings: [{ partOfSpeech }],
    } = element;

    const { meanings } = element;

    meanings.forEach((element) => {
      element.definitions.forEach((element) => {
        formattedData.push({
          definition: element.definition,
          partOfSpeech: partOfSpeech,
          id: crypto.randomUUID(),
        });
      });
    });
  });

  return formattedData;
}

function WordInformation({ data, word }) {
  return (
    <>
      <div className="word">{word}</div>
      <ul className="data-list">
        {formatData(data).map((element) => {
          return (
            <li key={element.id} className="data-item">
              <div>
                <label className="part-of-speech">{element.partOfSpeech}</label>
              </div>
              <div className="definition">{element.definition}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default WordInformation;
