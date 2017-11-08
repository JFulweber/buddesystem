import React from 'react';
import styles from './homepage.scss';
import Banner from '../components/Banner/Banner.jsx'

export default class HomePage extends React.Component {
    render() {
        console.log(styles.banner);
        return (
            <div id='homepage' className={styles.homepage}>
                <Banner> Welcome to the BuddE System! </Banner>
                <div className = {styles.borderContainer}>
                    <p>Lorem ipsum dolor sit amet, cons
                        ectetur adipiscing elit. Cras quis ipsum non enim malesuada ullamcorper ac ac ex. Nam venenatis molestie felis. Pellentesque id felis sed massa suscipit rutrum. Fusce in justo fermentum odio elementum dignissim et volutpat massa. In libero ex, accumsan et elit eget, finibus ullamcorper orci. Mauris feugiat aliquet velit, vitae porttitor neque blandit eget. Mauris tincidunt tristique ultrices. Vestibulum eu gravida orci, at lacinia lectus.


Nullam rutrum ante non purus dignissim tincidunt. Vivamus id velit risus.
 Mauris iaculis pulvinar velit, sed rhoncus leo tempus sed. Fusce varius ex orci, id blandit elit mollis non. Sed efficitur magna magna, a efficitur purus finibus quis. Pellentesque luctus ligula eu neque interdum suscipit. Cras nec mattis nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum non lorem ac est tristique dignissim sed ac metus. Ut non urna lacinia, commodo turpis ut, volutpat arcu. Nunc porta nisi nunc, eu vestibulum risus posuere scelerisque. Mauris dapibus nulla mi, vel fermentum libero dignissim sit amet. Donec vel dapibus dui. Aliquam pulvinar mi at nulla interdum pulvinar. Sed hendrerit orci id viverra pharetra. Nullam est dui, volutpat eu erat at, lobortis maximus justo.

Pellentesque ut pellentesque felis. Nunc neque nunc, vulputate quis
 l
igula aliquet, scelerisque aliquam arcu. Mauris vitae nisl eleifend, maximus quam id, fermentum augue. Sed facilisis nulla at quam dictum, sed malesuada justo sollicitudin. Maecenas nisi orci, luctus eu urna non, pulvinar efficitur odio. Vestibulum gravida imperdiet sollicitudin. Aliquam id lacus eleifend, viverra augue in, vulputate felis. Morbi commodo sagittis nulla. Fusce sit amet leo quis est eleifend euismod. Phasellus ac orci nec mauris viverra interdum sed id odio. Duis at sollicitudin quam, commodo volutpat mauris. Nulla efficitur nisi eget turpis pharetra, at vehicula leo egestas. Donec auctor, lorem ut vulputate placerat, nibh elit bibendum massa, sit amet egestas justo quam bibendum neque. Vivamus dapibus imperdiet consequat. Pellentesque id tincidunt orci, sit amet luctus enim. Aliquam in justo a ipsum euismod sodales.

Nunc mattis posuere magna, quis rhoncus turpis facilisis pretium. 
Suspendisse ullamcorper laoreet quam et ornare. Suspendisse viverra euismod pulvinar. Nunc tortor felis, sollicitudin nec metus at, aliquam feugiat metus. Ut id nibh purus. Aliquam erat volutpat. Duis feugiat lobortis odio, in lacinia erat commodo non. Vivamus ligula arcu, laoreet a posuere quis, mollis ac justo. Phasellus tortor urna, condimentum semper convallis sit amet, hendrerit ut leo. Nunc vel volutpat turpis.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Praesent hendrerit finibus tempus. Vivamus blandit posuere metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut quis bibendum diam, at consequat nisi. Pellentesque vulputate gravida sollicitudin. Donec vulputate lacinia faucibus. Nulla et metus quis ipsum interdum volutpat in non ex. Vivamus tortor leo, ornare non augue ut, fermentum porttitor diam. Praesent mollis ac sem quis convallis. Vestibulum auctor pharetra purus. Nullam ultrices diam sit amet tristique ullamcorper. Ut hendrerit tincidunt faucibus. Proin maximus magna vitae laoreet fringilla. Vivamus sed auctor magna, et commodo urna.</p>
<p>Lorem ipsum dolor sit amet, cons
                        ectetur adipiscing elit. Cras quis ipsum non enim malesuada ullamcorper ac ac ex. Nam venenatis molestie felis. Pellentesque id felis sed massa suscipit rutrum. Fusce in justo fermentum odio elementum dignissim et volutpat massa. In libero ex, accumsan et elit eget, finibus ullamcorper orci. Mauris feugiat aliquet velit, vitae porttitor neque blandit eget. Mauris tincidunt tristique ultrices. Vestibulum eu gravida orci, at lacinia lectus.


Nullam rutrum ante non purus dignissim tincidunt. Vivamus id velit risus.
 Mauris iaculis pulvinar velit, sed rhoncus leo tempus sed. Fusce varius ex orci, id blandit elit mollis non. Sed efficitur magna magna, a efficitur purus finibus quis. Pellentesque luctus ligula eu neque interdum suscipit. Cras nec mattis nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum non lorem ac est tristique dignissim sed ac metus. Ut non urna lacinia, commodo turpis ut, volutpat arcu. Nunc porta nisi nunc, eu vestibulum risus posuere scelerisque. Mauris dapibus nulla mi, vel fermentum libero dignissim sit amet. Donec vel dapibus dui. Aliquam pulvinar mi at nulla interdum pulvinar. Sed hendrerit orci id viverra pharetra. Nullam est dui, volutpat eu erat at, lobortis maximus justo.

Pellentesque ut pellentesque felis. Nunc neque nunc, vulputate quis
 l
igula aliquet, scelerisque aliquam arcu. Mauris vitae nisl eleifend, maximus quam id, fermentum augue. Sed facilisis nulla at quam dictum, sed malesuada justo sollicitudin. Maecenas nisi orci, luctus eu urna non, pulvinar efficitur odio. Vestibulum gravida imperdiet sollicitudin. Aliquam id lacus eleifend, viverra augue in, vulputate felis. Morbi commodo sagittis nulla. Fusce sit amet leo quis est eleifend euismod. Phasellus ac orci nec mauris viverra interdum sed id odio. Duis at sollicitudin quam, commodo volutpat mauris. Nulla efficitur nisi eget turpis pharetra, at vehicula leo egestas. Donec auctor, lorem ut vulputate placerat, nibh elit bibendum massa, sit amet egestas justo quam bibendum neque. Vivamus dapibus imperdiet consequat. Pellentesque id tincidunt orci, sit amet luctus enim. Aliquam in justo a ipsum euismod sodales.

Nunc mattis posuere magna, quis rhoncus turpis facilisis pretium. 
Suspendisse ullamcorper laoreet quam et ornare. Suspendisse viverra euismod pulvinar. Nunc tortor felis, sollicitudin nec metus at, aliquam feugiat metus. Ut id nibh purus. Aliquam erat volutpat. Duis feugiat lobortis odio, in lacinia erat commodo non. Vivamus ligula arcu, laoreet a posuere quis, mollis ac justo. Phasellus tortor urna, condimentum semper convallis sit amet, hendrerit ut leo. Nunc vel volutpat turpis.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Praesent hendrerit finibus tempus. Vivamus blandit posuere metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut quis bibendum diam, at consequat nisi. Pellentesque vulputate gravida sollicitudin. Donec vulputate lacinia faucibus. Nulla et metus quis ipsum interdum volutpat in non ex. Vivamus tortor leo, ornare non augue ut, fermentum porttitor diam. Praesent mollis ac sem quis convallis. Vestibulum auctor pharetra purus. Nullam ultrices diam sit amet tristique ullamcorper. Ut hendrerit tincidunt faucibus. Proin maximus magna vitae laoreet fringilla. Vivamus sed auctor magna, et commodo urna.</p>
                </div>
            </div>
        )
    }
}