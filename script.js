function load()
            {
                document.body.style.backgroundColor="black";
                const msg=document.getElementById("d1");
                const h1=document.getElementById("h1");
                const h2=document.getElementById("h2");
                msg.innerHTML="created by <i><b>CSE BACKBENCHERS</b></i>";
                h1.style.color="white";
                h2.style.color="white";
                const c1=document.getElementsByTagName("i");
                for (let i=0;i<c1.length;i++)
            {
                c1[i].style.color="darkcyan";
            }
            
            }