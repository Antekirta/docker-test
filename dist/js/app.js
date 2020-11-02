const { axios, Vue } = window;

const VChat = {
  name: 'VChat',
  template: `
    <div class="container" style="max-width: 480px">
        <div v-if="!nameIsSet">
          <div class="input-field col s6">
            <input v-model="name" placeholder="Enter your name" id="first_name" type="text" class="validate">
          </div>
    
          <div class="input-field col s6">
            <a class="waves-effect waves-light btn-small" @click.prevent="nameIsSet = true">Submit name</a>
          </div>
        </div>
    
        <div v-if="nameIsSet">
          <h4>Messages</h4>
      
         <ul class="collection">
          <li v-for="message in messages"
           :key="message.id"
           class="collection-item">
              <h5>{{ message.name }}</h5>
              
              <p>{{ message.text }}</p>
           </li>
        </ul>
        
        <div>
          <div class="input-field col s6">
            <textarea v-model="message" id="textarea1" class="materialize-textarea"></textarea>
          </div>
          
          <div class="input-field col s6">
            <a class="waves-effect waves-light btn-small" @click.prevent="submitMessage">Submit</a>
          </div>
        </div>
      </div>
    </div> 
  `,
  data() {
    return {
      name: '',
      nameIsSet: false,
      message: '',
      messages: []
    };
  },
  methods: {
    async submitMessage() {
      // this.addMessage(this.message);

      const { name, id, text } = this.buildMessage(this.message);

      this.message = '';

      await axios.post('/api/message', {
        id,
        name,
        message: text
      });
    },
    
    buildMessage() {
      return {
        name: this.name,
        text: this.message,
        id: this.messages[this.messages.length - 1] + 1 || 1
      };
    },
    
    addMessage(message) {
      this.messages.push(message);
    }
  }
};

new Vue({
  el: '#vue-js-container',
  components: {
    VChat
  },
  template: `
    <v-chat v-cloak />
  `
});