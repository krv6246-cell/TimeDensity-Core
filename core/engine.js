// Time Density Engine - ρₜ, ∇ρₜ, Точка 0
class TimeDensity {
  constructor() {
    this.rho = 1.0; // текущая плотность
    this.theta = 0; // колебание
  }

  compress(delta) {
    this.rho = Math.min(5.0, this.rho + delta);
    return this.rho;
  }

  release(delta) {
    this.rho = Math.max(0.1, this.rho - delta);
    return this.rho;
  }

  playRound() {
    this.theta = (Math.random() - 0.5) * 2;
    const outcome = this.rho * (1 + this.theta * 0.3);
    return { rho: this.rho, theta: this.theta, outcome };
  }
}

export default TimeDensity;