import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
  return `
    <div style="
      width: 350px;
      margin: 40px auto;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #1e293b, #0f172a);
      color: white;
      text-align: center;
    ">
      <h2 style="margin: 0 0 10px; font-size: 1.5rem;">Welcome 🚀</h2>
      <p style="margin: 0 0 15px; font-size: 1rem;">
        Explore powerful JSON tools at
      </p>
      <a href="https://jsontoall.tools" target="_blank" 
        style="
          display: inline-block;
          padding: 10px 20px;
          background: #3b82f6;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s;
        "
        onmouseover="this.style.background='#2563eb'"
        onmouseout="this.style.background='#3b82f6'">
        Visit JSONToAll.Tools
      </a>
    </div>
  `;
}

}
