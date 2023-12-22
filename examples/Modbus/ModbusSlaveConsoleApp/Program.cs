﻿using TouchSocket.Core;
using TouchSocket.Modbus;
using TouchSocket.SerialPorts;
using TouchSocket.Sockets;

namespace ModbusSlaveConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Enterprise.ForTest();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            var service = CreateModbusTcpSlave();

            Console.ReadKey();
        }

        static ModbusTcpSlave CreateModbusTcpSlave()
        {
            var service = new ModbusTcpSlave();
            service.Setup(new TouchSocketConfig()
                //监听端口
                .SetListenIPHosts(7808)
                //设置数据存储区，即线圈、离散输入、保持寄存器、输入寄存器
                .SetModbusDataLocater(new ModbusDataLocater(10, 10, 10, 10))
                );
            service.Start();
            Console.WriteLine("服务已启动");
            return service;
        }

        static ModbusRtuOverTcpSlave CreateModbusRtuOverTcpSlave()
        {
            var service = new ModbusRtuOverTcpSlave();
            service.Setup(new TouchSocketConfig()
                //监听端口
                .SetListenIPHosts(7810)
                //设置数据存储区，即线圈、离散输入、保持寄存器、输入寄存器
                .SetModbusDataLocater(new ModbusDataLocater(10, 10, 10, 10))
                );
            service.Start();
            Console.WriteLine("服务已启动");
            return service;
        }

        static ModbusUdpSlave CreateModbusUdpSlave()
        {
            var service = new ModbusUdpSlave();
            service.Setup(new TouchSocketConfig()
                //监听端口
                .SetBindIPHost(7809)
                //设置数据存储区，即线圈、离散输入、保持寄存器、输入寄存器
                .SetModbusDataLocater(new ModbusDataLocater(10, 10, 10, 10))
                );
            service.Start();
            Console.WriteLine("服务已启动");
            return service;
        }

        static ModbusRtuOverUdpSlave CreateModbusRtuOverUdpSlave()
        {
            var service = new ModbusRtuOverUdpSlave();
            service.Setup(new TouchSocketConfig()
                //监听端口
                .SetBindIPHost(7811)
                //设置数据存储区，即线圈、离散输入、保持寄存器、输入寄存器
                .SetModbusDataLocater(new ModbusDataLocater(10, 10, 10, 10))
                );
            service.Start();
            Console.WriteLine("服务已启动");
            return service;
        }

        static ModbusRtuSlave CreateModbusRtuSlave()
        {
            var service = new ModbusRtuSlave();
            service.Setup(new TouchSocketConfig()
                //设置串口
                .SetSerialPortOption(new SerialPortOption()
                {
                    BaudRate = 9600,
                    DataBits = 8,
                    Parity = System.IO.Ports.Parity.Even,
                    PortName = "COM1",
                    StopBits = System.IO.Ports.StopBits.One
                })
                //设置数据存储区，即线圈、离散输入、保持寄存器、输入寄存器
                .SetModbusDataLocater(new ModbusDataLocater(10, 10, 10, 10))
                );
            service.Connect();
            Console.WriteLine("已连接COM端口");
            return service;
        }
    }
}
