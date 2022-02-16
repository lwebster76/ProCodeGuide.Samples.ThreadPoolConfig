﻿namespace ProCodeGuide.Samples.ThreadPoolConfig.Models
{
    public class ThreadCount
    {
        public int MinWorkerThreads { get; set; }
        public int MinCompletionPortThreads { get; set; }
        public int MaxWorkerThreads { get; set; }
        public int MaxCompletionPortThreads { get; set; }
    }
}
