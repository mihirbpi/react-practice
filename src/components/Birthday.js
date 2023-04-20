var Latex = require('react-latex');
const Birthday  = () => {
    return (
    <div className="birthday">
        <h2>Happy Birthday Baba! </h2>
        <p><Latex>$53$ is a very special number...</Latex></p>
        <p>
        <Latex>It is the $16$th prime number. It is a balanced prime (average of the previous prime ($47$) and the next prime ($59$)) and a Sophie Germain prime ($2 \times 53 + 1 = 101$ is also a prime). </Latex>
        </p>
        
    <p><Latex> The sum of the first $53$ primes is $5830$, which is divisible by $53$, a property shared by only a few other numbers.</Latex>
    </p>
    <p>
    <Latex>
    $53$ cannot be expressed as the sum of any integer and its decimal digits, making $53$ a self number. ($21$ is not a self number because $21 = 15+1+5$ the sum of $15$ and its decimal digits)
    </Latex>
    </p>
    </div>
    );
}

export default Birthday;