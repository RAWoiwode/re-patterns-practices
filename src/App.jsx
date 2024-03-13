import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem
            className="accordion-item"
            id={"experience"}
            title="We got 20 years of experience"
          >
            <article>
              <p>You can&apos;t go wrong with us</p>
              <p>
                We are in the business of planning highly individualized
                vacation trips for more than 20 years
              </p>
            </article>
          </AccordionItem>
          <Accordion.Item
            className="accordion-item"
            id={"local-guides"}
            title="We work with local guides"
          >
            <article>
              <p>We are not doing this alone from our office.</p>
              <p>
                We work with local guides to ensure a safe and pleasant vacation
              </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
