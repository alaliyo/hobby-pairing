import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

function PostCarousel() {
    return(
        <CarouselBox>
            <Carousel variant='dark'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDQ0PDQ0NDQ8ODQ0NDg0PERsNDQ8NFREWFhURFRMYHCggGBolHRMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ8PGjIZFRkrKystKys1NystKy0rKysrKy0tKysrKysrKysrKysrLSsrKy0rLSsrKysrLSsrKysrK//AABEIAL4BCgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAHRABAQEBAQACAwAAAAAAAAAAAAERUQIhQRJhcf/EABcBAQEBAQAAAAAAAAAAAAAAAAABBwX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AOjbe029qDObrrLt7Tb2oF0Xb2m3tQW6Lt7Tb2oJdF29pt7UC6Lt7Tb2sz18qt0Xb2m3tQS6Lt7Tb2oF0Xb2m3tQW6Lt7Tb2oJdF29pt7UT8vnFujW3tNvagl0Xb2m3tQLou3tNvagt0Xb2m3tQS6Lt7Tb2oF0Xb2m3tZ/L6VboAIAAKCAAAM+q1SQCQAAABUUBAAABn1WpEkUAAAAFgIAAAnqqkmAeYoAAUAJAAAAFBAAAAASQFAAAAFQAAAAATzMUAAAFBAAAAAAAADWbeNSYAAACggqAAAAz6vP4DWiSKAAAKAgAAABqerwkBQAAUEFQAABPSgEgAAACoAAAAAVJFAAAAAVAAAAKAJIoAAAKgAAAqAAAAACSKAAAAAAAAAAAkigAAAACoAAACSKAAAAAAAAACgIAADPq8BrRPMxQAAAUEFQAAA1n16Xz5wFAAAAFAQAAE9UF0TzFAAAABUAAACpIoAAAAAqAAAAAJIoAAAAAqAAAAkigAABQAgAAACoAAAAAJIoAAAACoAAAAAJ5igAAAqAAAAAAAAJ6At+oeZhPKgAAKigIAAACerxak8geYoAAAoIAAABQT1TzCeVAAAVFAQAAAAAAAASAoAAAAAAAAAAnn9qAAAAAKgAAAJAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAZlBMVEVqs9xpsttusthrsuFrtt+XyedMgZ5mtN5TiqlqtNpns9eJweVusd5ls9xust5qs92qz+aRyeCWzeqZxuiSz+xzrclss9OGxuhpuN5Via6Nw+KJxOtur+BTjKZlsdVwteFmnLpDbYZs+jspAAAEjklEQVR4nO2d4WKTMBSFwVXXbqPoprM6nfr+L+lgbWmBhJCTm9zA+f4oJSHhK8kNCWXF5y+PT48fiQdPX78V96+3D4fimrKlAPA4gksWYxK4wpd1cD3Y/nlbfL+r9lV1O2TssxmMHhPOZExQwRU+HsWxIm3iw4/i5/Nu//qBeLA/bIuX3c2v2xviwa/D7+L+rn7AOw2I+q2nqcvasNe4IyV1U+vdZqtB31uPXZg76xAhITxNpajPlzKuPvtYIKi+QGOYqUIK6oMo5fo+3+q75kvZoJuy38uX0+d5epnoK6X1Rc4Xk9z1JQ7FMfRJNt7l63OtiJeItu/2L9M355D0+nxOpiyoryHSAK1XZrhj5aoPcEB9vn3mMa931gHC+pp5KHsCoYKvqiCHvL7UUJ/eKlAfBPVBhNQ3FkbT6xMloL5Yk5Sa0LLWkSnUB0F9EC76SstWb0dpXdFeXs/opK80b13vmAgeUSNLlEg2v/EC+pZ3+cXTtzh1DUd9e3OKblGz2zYltOoL40/X6PKkb2dOUlo3L3aU1nm4QOesUV/1YNGXGkW2BujXBy0LSfOur6A+P/TrUyyv01elrogZ/X3fpo28SZZcNcuZ5nLYTH2zoT4I6oOgPgifKQMld00aKkJ9EJysh8j46tMA9UF0My5NFExdGwdifHXuP+Dspgyo71TAjNalf76vh7S+ea9gOF99yKP+MRk7taDdsd/VR30+XE5YjYO/ksSZeS8BwcsyfD6jg3AYuFCfGX13HUvTF7lnWZi+iH1fzPKUN15NYVzu66A+COqDiKcv4UxNjvr6NU6nT7BguXHfKiYFqQ+C+iCoD4L6IPRNGWQF9UFQHwT1QVAfBPVBUB8E9UFQHwT1QcD6VnFvZjzJtPo8plCTzLpSHwT1QSD67BWmvgt95dW/xwV/+2OnY/uWFk6Mb6e51ne2/P4f3+clVhGNWwaN9yQOOSj1UZ8TbLwQJn3HTc8wNyuP5COl0nFawT2vh76J1N2+LqGMRQX6PHDXN/JZSBauz/4ZjgJ9bLwQZ3u18xlO6RtJaE6PRBfJhzTCRD1dP2LrIXj1BRozqB5EKmi8E1AfBPVBrFSfitPO96aN+iBU6JNm4fryvfpULHio15dk5UsN1AdBfRDUB0F9ECd92byEKQABv3CHv5iwOELre62oz49FXn2TSyHBllVOfd+iev/Y+k6vAFtxDDXRKjE6PEdeseckMof6IOxKZulbo2A3fS5pqW+A/qUi1ajSl9/VrU9fVv6oD0KVPsmXdcnQi7w6FniiAX9d1AcdgPqgAxj1ZdcN+SCmL7sY6EVgfclwOgnjqY7uiHIB6NDndp7UZ8BRH5Zdgpz0GRNSH5QwT33jv32ydjmaA/pUvcYqLqLPlkWxvomKxdCXMdQHoUEfG697eaNlTOsrDXlB2gNLfj2B9XlXQ+ZvQrfmIl/eS9MXGeqDoD6IJPqgMU9tyrsWfRiqRj7UB0F9ENQHkY2+szO1+jTVq0fEqDqrIOobFjUjMfUNi5qR+PjDBOq7KGpG4kbfy27zZ0P82BZ/PxFv/v0H5dlTaPlDfdUAAAAASUVORK5CYII="
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56Rt80q1P-oXnFOIJk47y6PxdpDqvBH9SWA&usqp=CAU"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </CarouselBox>
    );
}

export default PostCarousel;

const CarouselBox = styled.div`
    width: 600px;
    margin: 20px auto;
    div div img {
        height: 400px;
    }
    @media screen and (max-width: 768px) {
        margin-left: 5%;
        margin-right: 5%;
        width: 90%;
        div div img {
            height: 350px;
        }
    }
    @media screen and (max-width: 600px) {
        margin-left: 0;
        margin-right: 0;
        width: 100%;
        div div img {
            height: 300px;
        }
    }
`;