﻿using TouchSocket.Core;

namespace RpcPerformanceConsoleApp
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            var consoleAction = new ConsoleAction("h|help|?");//设置帮助命令
            consoleAction.OnException += ConsoleAction_OnException;//订阅执行异常输出

            BeetleXRpc.StartServer();
            NewLifeRpc.StartServer();
            TouchSocketRpc.StartServer();

            var count = 100000;

            consoleAction.Add("1.1", "BeetleXRpc测试Sum", () => BeetleXRpc.StartSumClient(count));
            consoleAction.Add("1.2", "BeetleXRpc测试GetBytes", () => BeetleXRpc.StartGetBytesClient(count));
            consoleAction.Add("1.3", "BeetleXRpc测试BigString", () => BeetleXRpc.StartBigStringClient(count));

            consoleAction.Add("2.1", "NewLifeRpc测试Sum", () => NewLifeRpc.StartSumClient(count));
            consoleAction.Add("2.2", "NewLifeRpc测试GetBytes", () => NewLifeRpc.StartGetBytesClient(count));
            consoleAction.Add("2.3", "NewLifeRpc测试BigString", () => NewLifeRpc.StartBigStringClient(count));

            consoleAction.Add("3.1", "TouchSocketRpc测试Sum", () => TouchSocketRpc.StartSumClient(count));
            consoleAction.Add("3.2", "TouchSocketRpc测试GetBytes", () => TouchSocketRpc.StartGetBytesClient(count));
            consoleAction.Add("3.3", "TouchSocketRpc测试BigString", () => TouchSocketRpc.StartBigStringClient(count));

            consoleAction.ShowAll();

            await consoleAction.RunCommandLineAsync();

        }

        private static void ConsoleAction_OnException(Exception ex)
        {
            ConsoleLogger.Default.Exception(ex);
        }
    }
}