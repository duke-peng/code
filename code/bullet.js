


//子弹Bullet

class Bulleta{
		constructor(ele,id){
		[this.ele,this.id] = [document.createElement("div"),parseInt(Math.random()*100000000)]
	
	}
	
}
	
	
class Bullet extends Bulleta{	
	
	init(){
		gameEngine.allBullet[this.id] = this;
		//console.log( gameEngine.allBullet );
		
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	
	move(){
		let that = this;
		this.timer = setInterval(()=>{
			var y = that.ele.offsetTop - 10;
			if (y < -18) {
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除子弹
				
				//删除
				delete gameEngine.allBullet[that.id];
			}
			else {
				that.ele.style.top = y + "px"; //移动
			}
		}, 50);
	}
	
	boom(){
			clearInterval(this.timer); //停止移动
			
			this.ele.className = "bullet-die";
			
			let that = this;
			const dieImgs = ["images2/die1.png", "images2/die2.png"]; 
			let i = 0;
			let dieTimer = setInterval(function(){
				if (i >= 1){
					clearInterval(dieTimer); //停止爆炸
					gameEngine.ele.removeChild(that.ele); //移除子弹
				}else {
					that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
				}
			}, 100);
		}
}
	
	
	
	
	
	
	


	//属性ele
	
	
	//方法init
	
		
		//添加
		
	
	
	//方法move
	
	
	//爆炸
	

