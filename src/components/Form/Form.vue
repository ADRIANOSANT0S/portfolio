<template>
    <form class="form" action="">
        <div class="form__highline">
            <div class="form__item">
                <label class="text" for="fistName">Seu nome</label>
                <input class="form__item__input" type="text" name="fistName" id="fistName" />
            </div>
            <div class="form__item">
                <label class="text" for="lastName">Seu sobre nome</label>
                <input class="form__item__input" type="text" name="lastName" id="lastName" />
            </div>
        </div>
        <div class="form__item">
            <label class="text" for="email">Seu email</label>
            <input class="form__item__input small-text" type="email" name="email" id="email" />
        </div>
        <div class="form__item">
            <label class="text" for="tel">Seu telefone</label>
            <input class="form__item__input" type="tel" name="tel" id="tel" />
        </div>
        <select class="form__option" name="services" id="" title="escolha um serviço">
            <option value="">Escolha um serviço</option>
            <option value="webDeveloper">Desenvolvimento Web</option>
            <option value="automation">Automação de Processos</option>
            <option value="api">Integração e Criação de API</option>
            <option value="maintenance">Manutenção de Aplicações</option>
            <option value="bd">Banco de Dados</option>
            <option value="script">Criação de Scripts</option>
        </select>
        <div class="form__item">
            <label class="text" for="">Descreva seu porjeto</label>
            <textarea class="form__item__message text" name="massage" id="message"></textarea>
        </div>
        <button class="buttonI" type="submit">Enviar</button>
    </form>
</template>

<script>
    export default {
        name: 'FormProject'
    }
</script>

<style src="./style.scss" lang="scss" />
