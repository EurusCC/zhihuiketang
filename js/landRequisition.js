


var none = document.querySelectorAll( '.none' )
// console.log( none );
var item = document.querySelectorAll( '.item' )


for ( let i = 0; i < item.length; i++ )
{
    item[ i ].setAttribute( 'index', i )
    item[ i ].onclick = function ()
    {
        var ind = this.getAttribute( 'index' )
        for ( var k = 0; k < item.length; k++ )
        {

            // li[ k ].setAttribute( 'src', originalSrc );
            // item[ k ].className = ''
            item[ k ].firstElementChild.firstElementChild.style.display = 'block'
            item[ k ].firstElementChild.lastElementChild.style.display = 'none'
            item[ k ].lastElementChild.style.color = ''
            // li[ ind ].setAttribute( 'src', hoverSrc )
            item[ ind ].firstElementChild.firstElementChild.style.display = 'none'
            item[ ind ].firstElementChild.lastElementChild.style.display = 'block'
            // item[ ind ].className = 'color'
            item[ ind ].lastElementChild.style.color = 'rgb(61, 142, 240)'

        }
        for ( var m = 0; m < none.length; m++ )
        {
            none[ m ].style.display = 'none';
            none[ m ].classList.add( 'active' )
            none[ m ].classList.remove( 'active1' )
            none[ ind ].style.display = 'block';
            none[ ind ].classList.add( 'active1' )
            none[ ind ].classList.remove( 'active' )
        }
    }

}