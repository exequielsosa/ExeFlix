import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {/* <Accordion.Frame> */}
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
        <Accordion.Item />
        
      {/* </Accordion.Frame> */}

      <OptForm>
        <OptForm.Input placeholder="Correo Electronico" />
        <OptForm.Button>Registrate</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>¡Registrate ahora!, es gratis.               </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}