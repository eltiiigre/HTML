<html>

    <head>
        <title> Weather Forecast </title>
        <script src = https://code.jquery.com/jquery-3.5.1.min.js></script> 
		<link href='https://fonts.googleapis.com/css?family=Bai Jamjuree' rel='stylesheet'>
		<style>
			html{
				text-align: center;
				font-family: 'Bai Jamjuree';
				background: url(images.jpeg) no-repeat center fixed;
				background-size: cover;
				font-size: 20px;
				font-style: bold;
				color:black;
			}
			h1 {
				font-size: 50px;
				text-shadow:5px 5px 10px white;
			}
			.center-block {
				margin-right: auto;
				margin-left: auto;
				font-size: 20px;
				border: 2px solid;
			}
			button{
				font-size: 16px;
				font-style: bold;
				background-color: black;
				color: white;
				padding: 10px 24px;
				border-radius: 12px;
			}
		</style>
    </head>
	
	<body>
		<h1> Ella's Weather Forecast </h1>
		<img src="cat.gif" width="400px" height="300px">
		<br><br><input class='center-block' type="text" name="city" id="city_name"> 
		<button class='button' onclick="weather(document.getElementById('city_name').value)">Enter</button>
		<p class ="city" id = "city" ></p>
		<p class = "description, DESCRIPTION"> </p>
    
		<script>
			function weather(a){

				let city = document.getElementById('city_name').value;

				$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=9ed0b8d5d54b4f3eba0fe698ce6cd462",
				
				function(data){
					console.log(data);
					$('#city').html(data.name);
					$('.description').html(data.weather[0].description)
				});
			}
		</script>
		
	</body>
	
</html>