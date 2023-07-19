import React from 'react' ;
import { Link } from 'react-router-dom';
import "./Nav.css"

const Navbar = () => {
  return (
    <>
      <nav className='navbar mt-4'>
        <Link to={"/"}>
        <div className='nav-left-item'>
         <h1><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAoCAYAAABw65OnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVnSURBVHgBrVhrbBRVGD13aS2+aTSggrpalRhTGyLUIAohIGqFIKEmCDGSiH1pAkTRP1oqaFBDtGqb0iKNr0SlGiNiSBrFouCfCkoUfBFcI2IhUkB8tED3cr47s7t3pjuzs4WTnJ37+O69Z+7jm++uQkToKhRiGKYgiRnMjievJ0e61QfI3dDops0XqgWbkAdULgO9FGejD3M4+HJmr0M0/ErWq1a8HcU4VISuxrV8dJBlGAo0tiOGSrUGiTCzWGD7hzCXnWwZsgCBwk3Sh67DhHCzbAKqMY2PDeQ53gocYYtNfG7EALaxtgfHWFKIEr7OOJbPo9Vklpzv6/IIOYnLszuSCG7AEpZ2M1nsq3qVu6NeNZoOZWOWk6PIf8hvyM/JAV2DOMU8w/QCX/teCi9Tr2FfqAhzAhR+ZjJuFR/kplyg1qKL6cXkEnIMBuMDstLqq4qz00xBBZkB8J1qw43+hjGfpHqPAI0/qb6CAvYwJ8dudYCAn8hHPV21oY3tZ7PPk1b/pZypan9jZSm/wl2GkZbEhTzznzHVRZYgO36H7ANkPwHcXzJ7jVbRYfTjavW6WVZ3mIycJz0CNNop4A2m1oUI6A0TYLptxcvuS6RQzL01x7aJWYPebZVr1qzkcyE5I6D/4+T0MAFpDOAxTz6JmkEi6BMmcCYus8rfch3M8uCecT+cU5ETPBHb+VpfWkXluhaXe0RQwO2+dh+RM+E9JTbeJdcjwvjkVDftdeHaLKNHxGSPQQGVA3chGBchGlaRTe5InZ6aJCZlhnNwjVV9QDXjNz6vQjBuQW7IUj5B9pFF/O3hb79JCxTGpgxTM3FluqlOb7QLQgY4F+FfVHFoDW56uPTFI9nHvntSBkn494Tt1RT+d1NnIRzTA8rnky9lrVHGxacGLrTSpjLj1bR5S8FehGMZ2UxOtMpkg7dksf3bfQ7PDOMRBJmbg8ioHeWmehGOOFlHfgXHV7SS7Ri8jN+S/brBjJV2+UrjkFdEDDutRqP1vTjPSIsO2VNVCP6uAPvNRi9Klyr84BWRxFZkStaqDjzA1MM4M2hyBy33lGps9oqI4VM3v3ncenzP5/M4M9hGpl5wkaemwOdttSxRNbZW34BZkIkzRWn+68tHpXwljf+hix7L/rXFH+3xzUzQt+rZn6CudRdeYfZSq76LlCAkgfwhn/A9JpU0kVYGCs/Z2ZR/GL1hn/lexK062TgSKYmXO4boOEw+SH4oGb51HayIiwIO4T98bDeQmbiQ7PQJSJAVbodtZClyQ3yNxB8T0wJqTbT9gscqidXqzczxdHQ5KjusMjEY7wp5kVzqG+weUrzqrXCW7gQpm1m+qn+ljBjm38k44j14/UaCQc6gb5Isx/ukxJYr4AQqqUhpRRYBtXA+84JOZIFeghGUuIoCanxVf/CVp2Zrk9oTEkUNgxOkyN3gcfIpn20DuYaB6jxOqYTvX6t1jlflW1/C/M0c5A6u9318jvBrY30lg5tENhHZLj+yPDKNdiQuUfYyRmAzWWpvqn73WYRgJCnhEUbfLUEGfhFyHMW52DcoCXQXMRovpYAdni9uFGg0UMDTYSa2iDgcD2fHmrL+87kEEoV3s8OLkQ8UVjJWrc9lZk+5HLGjVn4HWWsEaF7x8hfQFEWAX4TcESvcZ4KcSwExrug7TO9ip7niCxsbuVUXRzXOtjEl9pMNlzDHrRFHxa3T8RRTkMxOHOHYSc9xm2qP7mVz/lNjw71xy/1hTIDJXlfAfuSBWD7G5kJ0kjcynblHWkjwlablK8D0iyGA/mIK5XdZReLGy+iSf8EQkNdMpMC/CrZQfp2jyHiOWUMVcNrgHnmWTuy0w8BTA5CKkm2YEskAAAAASUVORK5CYII="
          alt=""/>SpotGarage</h1>
        </div>
        </Link>


        
        <div className="right-nav-item">
        <a href="/">Home</a>
        <a href="#">Contact Us</a>
        <a href="/partner">Partner With Us</a>
        <a className='download-button' href="#">Download App</a>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar