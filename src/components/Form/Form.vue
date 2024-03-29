<template>
  <Form class="form" action="" :validation-schema="schema">
    <div class="form__highline">
      <div class="form__item">
        <label class="text" for="fistName">Seu nome*</label>
        <Field
          class="form__item__input"
          type="text"
          name="firstName"
          id="firstName"
        />
        <ErrorMessage class="error" name="firstName" />
      </div>
      <div class="form__item">
        <label class="text" for="lastName">Seu sobre nome*</label>
        <Field
          class="form__item__input"
          type="text"
          name="lastName"
          id="lastName"
        />
        <ErrorMessage class="error" name="lastName" />
      </div>
    </div>
    <div class="form__item">
      <label class="text" for="email">Seu email*</label>
      <Field
        class="form__item__input small-text"
        type="email"
        name="email"
        id="email"
        placeholder="nome@dominio.com"
      />
      <ErrorMessage class="error" name="email" />
    </div>
    <div class="form__item">
      <label class="text" for="tel">Seu telefone*</label>
      <Field
        class="form__item__input"
        type="tel"
        name="tel"
        id="tel"
        v-mask="['(##) #####-####']"
        placeholder="(00) 00000-0000"
      />
      <ErrorMessage class="error" name="tel" />
    </div>
    <div class="form__item">
      <Field
        as="select"
        class="form__option"
        name="services"
        id="services"
        title="escolha um serviço"
      >
        <option value="">Escolha um serviço*</option>
        <option value="webDeveloper">Desenvolvimento Web</option>
        <option value="automation">Automação de Processos</option>
        <option value="api">Integração e Criação de API</option>
        <option value="maintenance">Manutenção de Aplicações</option>
        <option value="bd">Banco de Dados</option>
        <option value="script">Criação de Scripts</option>
      </Field>
      <ErrorMessage class="error" name="services" />
    </div>
    <div class="form__item">
      <label class="text" for="message">Descreva seu porjeto*</label>
      <Field
        as="textarea"
        class="form__item__message text"
        name="message"
        id="message"
        ref="messageField"
      ></Field>
      <ErrorMessage class="error" name="message" />
    </div>
    <button class="buttonI" type="submit">Enviar</button>
  </Form>
</template>

<script>
import { mask } from 'vue-the-mask'
import { Form, ErrorMessage, Field, configure } from 'vee-validate'
import { object, string } from 'yup'

export default {
  name: 'FormProject',

  components: { Form, ErrorMessage, Field },

  directives: { mask },

  setup() {
    const schema = object({
      firstName: string()
        .matches(
          /^['a-zA-ZÀ-ÿ\s']+$/,
          'Seu nome só pode conter letras espaços e acentos.'
        )
        .required('Por favor informe seu nome.')
        .min(3, 'seu nome deve ter pelo menos 3 caracteres'),
      lastName: string()
        .matches(
          /^['a-zA-ZÀ-ÿ\s']+$/,
          'Seu nome só pode conter letras espaços e acentos.'
        )
        .required('Por favor informe seu sobre nome.')
        .min(4, 'seu sobrenome deve ter pelo menos 4 caracteres.'),
      email: string()
        .email('Por favor informe um email válido.')
        .required('Por favor informe seu email'),
      tel: string().required('Por favor informe um telefone para contato.'),
      services: string()
        .required('Por favor, escolha um serviço.')
        .test(
          'is-service-selected',
          'Por favor, escolha um serviço.',
          (value) => value !== ''
        ),
      message: string()
        .required('Por favor, detalhe seu projeto para mim poder ajudar.')
        .min(10, 'Por favor, forneça mais detalhes sobre o seu projeto.')
    })

    configure({
      validateOnBlur: true,
      errorBagName: 'errors',
      validateOnInput: true
    })

    return { schema }
  }
}
</script>

<style src="./style.scss" lang="scss" />
