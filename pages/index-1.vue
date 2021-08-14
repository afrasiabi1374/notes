<template>
	<div style="padding: 50px">
		<!-- <h1>salam {{ object.name }}</h1>
		<h1>age {{ object.age }}</h1>
		<div v-html="aliHtml">
		
		</div>
		<div v-if="display">
			v if
		</div>
		<div v-else>
			v else
		</div> -->
		<!-- <div v-for="(sample, i) in sampleArr" :key="i">
			{{ sample }} {{ i }}
		</div>
		<div @click="functionTest">click</div>-->
	<!-- AZMOON  <ul >
		<li style="cursor: pointer;" v-for="(name,i) in sampleArr" :key="i" @click="counter = i">{{name}}</li>
	</ul>
	<div  style="border:2px solid red;background: green;width:100px;height:100px;color:white;font-weight:bolder;font-size='2em';line-height:100px;text-align: center;margin-left:20px">
		{{counter}}
	</div> -->
<!-- <h1 id="example">
{{ message.split('').reverse().join('') }}</h1>
	</div>  -->
	<!-- <div id="example">
		<p>{{fullName}}

		</p>
	</div> -->
	<!-- <v-btn @click="test">salam</v-btn>
	<div>
		{{ nameMaker() }}
	</div>
	<div>
		{{ nameMakerComp }}
	</div> -->
<!-- <div  :class="{'active': isActive}">

hello this is sample class

</div> -->

<div  :class="{'active': isActive}">

<input v-model="name" />
{{ sayHello }}
<br>
<br>
<input v-model="name" />

</div> 

	</div>
</template>
<script>
import "./a.css";
export default {
	
	data(){
		return {
			isActive:true,
			error:null,

			el:'#example',
			name: 'ali',
			message : "this is sample message from message state",
			object: {
				name: 'ali',
				family: 'afrasiabi',
				age: 25,
				married: false
			},

			aliHtml: '<p>paraarph</p>',
			idmaker: 'shayan',
			counter: "no key",
			display: false,
			sampleArr: ['nima', 'ali', 'asghar', 'akbar', 'mohammad'],
			firstName: 'mohammad ali',
    		lastName: 'afrasibi',
			activeClass:'active',
			errorClass:'text-danger'
    	}
	},
	computed:{
		sayHello: function(){
			return 'hello ' + this.name
		}
	},
	methods:{
		nameMaker(){
			console.log('name maker has been called');
			return this.firstName + ' ' + this.lastName
		},
		test(){
			this.sampleArr = 'ali reza'
		}
	}

	
}




</script>